import React from 'react'
import Task from './task'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { useToast } from '../ui/use-toast';

export default function Todos({items}) {
    const {toast}=useToast();
    const checkATodo=useMutation(api.todos.checkATodo);
    const unCheckATodo=useMutation(api.todos.unCheckATodo);

    const handleOnChangeTodo=(task:Doc<'todos'>)=>{
        if(task.isCompleted){
            unCheckATodo({taskId:task._id});
        }else{
            toast({
                title:'✅ Task completed',
                description:"You are a rockstar",
                duration:3000,
            })
            checkATodo({taskId:task._id});
        }
    };

  return items.map((task,idx)=>(
    <Task 
  key={task._id} 
  {...task}
  handleOnChange={()=>handleOnChangeTodo(task)}
  /> 
  
));
}
