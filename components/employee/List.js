import { observer } from "mobx-react-lite";
import { useToDoStore } from "../../contexts/DataContext";

function List() {
  const { getIsLoading, getTasks } = useToDoStore();
  return (
    <ul className="list-group">
      {getIsLoading && getTasks.length === 0 ? (
        <li className="list-group-item text-center">Loading...</li>
      ) : (
        <>
          {getTasks.map(({ id, title, isCompleted }) => {
            return (
              <li key={id} className="list-group-item">
                <div>
                  {id} - {title}
                </div>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
}

export default observer(List);
