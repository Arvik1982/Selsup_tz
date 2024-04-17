import { Model, Param } from "../App";

export const baseData: {
    params: Param[];
    model: Model;
  } = {
    params: [
      {
        id: 1,
        name: "Длинна",
        type: "string",
      },
      {
        id: 2,
        name: "Цвет",
        type: "string",
      },
      {
        id: 3,
        name: "Назначение",
        type: "string",
      },
    ],
  
    model: {
      paramValues: [
        {          
          paramId: 3,
          value: "Кажуал",
        },
        {          
          paramId: 3,
          value: "Бизнес",
        },
        {          
          paramId: 3,
          value: "Классический",
        },
        {          
          paramId: 1,
          value: "Макси",
        },
        {          
          paramId: 1,
          value: "Мини",
        },
        {          
          paramId: 1,
          value: "middle",
        },
        {
            paramId: 2,
            value: "Красный"
            },
            {
             paramId: 2,
             value: "Синий",
            },
            {
             paramId: 2,
             value: "Зеленый",
            }
    
    
    ],

   

    },
  };