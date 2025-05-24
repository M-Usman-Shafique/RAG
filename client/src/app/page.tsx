import FileUpload from "@/components/FileUpload";

export default function Home() {
  return (
    <div className="flex h-full text-gray-100">
      <section className="w-1/3 bg-neutral-900 p-6 flex items-center justify-center">
        <FileUpload />
      </section>
      <section className="w-2/3 bg-neutral-900/70 p-4">Right Section</section>
    </div>
  );
}

