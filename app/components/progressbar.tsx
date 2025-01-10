

export default function ProgressBar({status} : {status : string}) {
  return (
      <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
          style={{width: status}}
        ></div>
      </div>
  );
}
