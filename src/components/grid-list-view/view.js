import { useDispatch, useSelector } from "react-redux";
import { selectView } from "../../../redux/actions/actions";

const View = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view.view);
  const displayView = (view) => {
    dispatch(selectView(view));
  };

  return (
    <div className="flex flex-row-reverse bg-gray-100 pt-2 sm:pt-4 px-5 sm:px-32">
      <div className="w-20 sm:w-28 flex justify-between border border-gray-400 px-1 sm:px-2 py-2 sm:py-3">
        <button
          className={`border border-black rounded px-2 sm:px-3 ${
            view === "grid" ? "bg-yellow-200" : ""
          }`}
          onClick={() => displayView("grid")}
        >
          <i className="fa-solid fa-table-cells-large"></i>
        </button>
        <button
          className={`border border-black rounded px-2 sm:px-3 ${
            view === "list" ? "bg-yellow-200" : ""
          }`}
          onClick={() => displayView("list")}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default View;