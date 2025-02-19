import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <Navbar />
      <h1 className="text-3xl font-bold">Welcome to LaLa Rentals</h1>
      <p className="text-gray-600 mt-4">Find your perfect rental today.</p>
    </div>
  );
}
