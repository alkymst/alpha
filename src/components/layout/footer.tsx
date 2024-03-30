export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        A project by{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://nathanielryansmith.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nathan Smith
        </a>
      </p>
    </div>
  );
}
