import Link from 'next/link';

export default function Login() {
  return (
    <div className="text-center mt-8">
      <Link href="/login">
        <button
          type="button"
          className="bg-blue-400 py-3 px-6 rounded-lg hover:bg-blue-700 text-black"
        >
          Login
        </button>
      </Link>
    </div>
  );
}
