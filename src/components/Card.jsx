export default function Card({ title, description, icon, actionText, onAction }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {icon && <div className="text-red-600 text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {actionText && (
        <button 
          onClick={onAction} 
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}