import { observer } from "mobx-react-lite";
import { useMainStore } from "../../contexts/MainContext";

function Statics() {
  const { toDoStore } = useMainStore();
  const { getTasks, getCompletedCount, getInCompletedCount } = toDoStore;
  return (
    <ul className="list-group">
      {getTasks?.length > 0 ? (
        <>
          <li className="list-group-item">
            Total : <strong className="statics-color">{getTasks.length}</strong>
          </li>
          <li className="list-group-item">
            Completed :{" "}
            <strong className="statics-color">{getCompletedCount}</strong>
          </li>
          <li className="list-group-item">
            Incompleted :{" "}
            <strong className="statics-color">{getInCompletedCount}</strong>
          </li>
        </>
      ) : (
        <li className="list-group-item text-center">No Tasks Found</li>
      )}
    </ul>
  );
}

export default observer(Statics);
