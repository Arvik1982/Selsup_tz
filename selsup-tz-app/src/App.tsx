import { useState } from "react";
import styles from "./app.module.css";
import { baseData } from "./baseData/baseData";

interface ParamValue {
  paramId: number;
  value: string;
}

export interface Param {
  id: number;
  name: string;
  type: string;
}

export interface Model {
  paramValues: ParamValue[];
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(false);

  const saveChanges = (elementValue:{value:string}) => {
      const elementIndex: number = baseData.model.paramValues.findIndex(
      (el) => el.value === elementValue.value
    );
    baseData.model.paramValues[elementIndex].value = inputValue;
    refresh ? setRefresh(false) : setRefresh(true);
  };

  return (
    <div className={styles.block}>
      {baseData.params.map((elParams) => {
        return (
          <div className={styles.block__elements} key={elParams.id}>
            <div className={styles.block__elements_item}>{elParams.name}</div>
            <div className={styles.elements__item_element}>
              <ul key={String(refresh)}>
                {baseData.model.paramValues
                  .filter((elFilter) => {
                    return elFilter.paramId === elParams.id;
                  })
                  .map((el) => {
                    return (
                      <div
                        key={el.value}
                        className={styles.elements__item_value}
                      >
                        <div className={styles.item__value}>{el.value}</div>

                        <input
                          name={el.value}
                          onChange={(e) => {
                            setInputValue(e.target.value);
                          }}
                          type="text"
                          placeholder="Введите новое название"
                          className={styles.value__new}
                        />

                        <button
                          onClick={() => {
                            saveChanges(el);
                          }}
                        >
                          Сохранить
                        </button>
                      </div>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
