function Success(props) {
        const { onClose, open, message } = props;
      
        const handleClose = () => {
          onClose(!open);
        };
      
        const handleListItemClick = (value) => {
          onClose(value);
        };
        if (!open) return null;

        return (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-md w-full text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2l4 -4m5 4a9 9 0 11-18 0a9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">Success!</h1>
              <p className="text-gray-600 mt-2">
{message}
              </p>
              <div className="mt-6 flex justify-center gap-4">
                {/* <button
                  className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-green-300"
                  onClick={onAction}
                >
                  Take Action
                </button> */}
                <button
                  className="px-6 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg shadow focus:outline-none focus:ring focus:ring-gray-300"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      }
      

export default Success;