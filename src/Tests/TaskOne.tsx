import styles from "./style/task.module.scss";

interface userInterface {
  firstName: string;
  lastName: string | null;
  customerID: string;
  note: string | null;
  profession:
    | "student"
    | "freelancer"
    | "productOwner"
    | "engineer"
    | "systemAnalytics";
}

const users: userInterface[] = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "111",
    note: "Some note",
    profession: "student",
  },
  {
    firstName: "Jane",
    lastName: "AA",
    customerID: "222",
    note: "Another note",
    profession: "engineer",
  },
  {
    firstName: "Adam",
    lastName: "Doe",
    customerID: "333",
    note: "Another note",
    profession: "systemAnalytics",
  },
  {
    firstName: "Jessie",
    lastName: "BB",
    customerID: "444",
    note: "Another note",
    profession: "engineer",
  },
  {
    firstName: "Jane",
    lastName: "CC",
    customerID: "555",
    note: "Notes",
    profession: "productOwner",
  },
  {
    firstName: "Chanel",
    lastName: "DD",
    customerID: "666",
    note: "Notes",
    profession: "freelancer",
  },
  {
    firstName: "Gigi",
    lastName: "EE",
    customerID: "777",
    note: "Notes",
    profession: "student",
  },
  {
    firstName: "Hermes",
    lastName: "",
    customerID: "888",
    note: "Notes",
    profession: "freelancer",
  },
];
const typeUsers = [...users];

enum ProfessionOrder {
  "student" = 1,
  "freelancer" = 2,
  "productOwner" = 3,
  "engineer" = 4,
  "systemAnalytics" = 5,
}

const TaskOne = () => {
  function sortUserName(users: userInterface[]) {
    users.sort((a: userInterface, b: userInterface) => {
      let nameA = `${a.firstName}${a.lastName}${a.customerID}`;
      let nameB = `${b.firstName}${b.lastName}${b.customerID}`;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  function sortByType(users: userInterface[]) {
    users.sort((a: userInterface, b: userInterface) => {
      return ProfessionOrder[b.profession] - ProfessionOrder[a.profession];
    });
  }

  sortUserName(users);
  sortByType(typeUsers);

  console.log("users", users);
  console.log("typeUser", typeUsers);

  return <div className={styles.taskContainer}></div>;
};

export default TaskOne;
