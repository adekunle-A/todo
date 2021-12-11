//type of todo object
export interface todoType {
  id: number;
  title: string;
  description: string;
  dateCreated: Date;
  dateCompleted?: Date;
  completed: boolean;
}
//created todoType
export interface newTodoType {
  title: string;
  description: string;
  dateCreated: Date;
  completed: boolean;
}
