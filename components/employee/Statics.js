import useToDoListState from "../../hooks/to-do-list/useToDoListState";

function Statics({ store }) {
  const { tasks, completedCount, inCompletedCount } = useToDoListState(store);
  return (
    <ul className="list-group">
      {tasks?.length > 0 ? (
        <>
          <li className="list-group-item">
            Total : <strong className="statics-color">{tasks?.length}</strong>
          </li>
          <li className="list-group-item">
            Completed :{" "}
            <strong className="statics-color">{completedCount}</strong>
          </li>
          <li className="list-group-item">
            Incompleted :{" "}
            <strong className="statics-color">{inCompletedCount}</strong>
          </li>
        </>
      ) : (
        <li className="list-group-item text-center">No Tasks Found</li>
      )}
    </ul>
  );
}

export default Statics;
