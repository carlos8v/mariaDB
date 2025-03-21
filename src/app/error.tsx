"use client";

export default function Error() {
  return (
    <main className="flex min-h-full min-h-screen flex-col items-center justify-center bg-white">
      <section className="w-full max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-medium">
          Um erro inesperado ocorreu
        </h1>
        <p className="text-base font-light text-zinc-600">
          Tente novamente mais tarde
        </p>
      </section>
    </main>
  );
}
