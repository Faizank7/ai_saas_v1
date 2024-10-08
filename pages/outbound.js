import { useRouter } from 'next/router'; // Import useRouter hook
import { OutboundList } from '../components/OutboundTile';

const Outbound = () => {
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="flex flex-col items-start min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-8">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Back
        </button>
        <h1 className="text-4xl font-bold ml-4">Outbound Recordings</h1>
      </div>
      <OutboundList />
    </div>
  );
};

export default Outbound;
