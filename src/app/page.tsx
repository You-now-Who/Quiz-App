
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl text-flame-600 font-bold mb-4">Welcome to our Quiz App</h1>
        <p className="text-lg text-gray-600 mb-8">Test your knowledge with our fun quizzes! This is placeholder ui, because I cant make shi-!</p>
        <img src="https://wallpaperaccess.com/full/1833699.jpg" alt="Quiz Image" width={400} height={300} className="rounded-md"/>
        <button className="bg-flame-500 hover:bg-flame-600 text-white font-bold py-2 px-4 rounded mt-8">
          Get Started
        </button>
      </div>
    </>
  );
}
