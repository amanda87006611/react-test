import { useState } from "react";

const TaskSix = () => {
  const [inputSearch, setInputSearch] = useState<string | number>("");

  const debounce = <T extends (...args: any[]) => void>(
    fn: T,
    delayMs: number
  ) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args);
      }, delayMs);
    };
  };

  const handleCall = (e: string | number) => {
    async function logAPI() {
      // do ajax here
      async function getData() {
        try {
          let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
      console.log("callAPIhere", e);
    }
    logAPI();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
    if (e.target.value) debounce(handleCall, 500)(e.target.value);
  };

  return (
    <>
      <h3>Task Six - Debounce</h3>
      <input
        type='search'
        name='p'
        value={inputSearch}
        onChange={(e) => handleOnChange(e)}
      />
    </>
  );
};
export default TaskSix;
