/* eslint-disable no-return-await */
import faunadb from 'faunadb';
import { faunaClient } from '../fauna-auth';
import { Follow } from './followers';

const q = faunadb.query;
const {
  Paginate,
  If,
  IsEmpty,
  Call,
  Logout,
  Let,
  Var,
  Create,
  Collection,
  Select,
  Login,
  Match,
  Get,
  Index,
  Identify,
  Do,
  Delete,
  ContainsStrRegex,
  Abort,
  GTE,
  Length,
} = q;

export async function Authenticate(email, password) {
  return await faunaClient.query(
    q.Login(q.Match(q.Index('Users_by_email'), email), {
      password,
    })
  );
}

export async function RegisterUser(name, username, email, password) {
  return await faunaClient.query(
    q.Create(Collection('Users'), {
      data: {
        name,
        username,
        email,
      },
      credentials: {
        password,
      },
    })
  );
}

module.exports = {
  Authenticate,
  RegisterUser,
};

/* Register Example4 - let's extend it to do e-mail validation 
   And follow ourselves at the moment we create the user 
   since you only see the feed of the people you follow */
function RegisterWithUser(
  email,
  password,
  name,
  alias,
  icon,
  rateLimiting = true
) {
  // It's always a good idea to use If for such validations compared to Do since Do is not short-circuited at this point
  // at the read-phase, which means that you will incur more reads.
  const ValidateEmail = (FqlStatement) =>
    If(
      ContainsStrRegex(
        email,
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
      ),
      // If it's valid, we continue with the original statement
      FqlStatement,
      // Else we Abort!
      Abort('Invalid e-mail provided')
    );

  const ValidatePassword = (FqlStatement) =>
    If(
      GTE(Length(password), 8),
      // If it's valid, we continue with the original statement
      FqlStatement,
      // Else we Abort!
      Abort('Invalid password, please provided at least 8 chars')
    );

  const RegisterFQLStatement = Let(
    {
      user: Create(Collection('users'), {
        data: {
          name,
          alias,
          icon,
        },
      }),
      account: Select(
        ['ref'],
        Create(Collection('accounts'), {
          credentials: { password },
          data: {
            email,
            user: Select(['ref'], Var('user')),
          },
        })
      ),
      // We don't ask verification of the e-mail so we might as well login the user directly.
      secret: Login(Var('account'), { password }),
    },
    Do(
      // Follow yourself
      Follow(Select(['ref'], Var('user')), Select(['ref'], Var('user'))),
      // then return user and account
      { user: Var('user'), account: Var('account'), secret: Var('secret') }
    )
  );
}
