import { observer } from "mobx-react-lite";
import { useToDoStore } from "../../contexts/DataContext";

function List() {
  const { getLoading, getEmployees } = useToDoStore();
  return (
    <ul className="list-group">
      {getLoading && getEmployees.length === 0 ? (
        <li className="list-group-item text-center">Loading...</li>
      ) : (
        <>
          {getEmployees.map(({ id, title, isCompleted }) => {
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
