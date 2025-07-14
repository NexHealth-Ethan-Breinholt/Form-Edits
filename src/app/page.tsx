import FormDisplayer from "./components/form-displayer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 w-1/2 min-w-2xl m-auto py-16">
        <FormDisplayer filePath="/form-examples/cc-authorization.json" />
      </main>
    </div>
  );
}