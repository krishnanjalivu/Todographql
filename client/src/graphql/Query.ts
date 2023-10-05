import { gql } from '@apollo/client';
export const GET_TODOS = gql`
  {
    todos{
      id
      description
      done
      
    }
    
  }
  
`;
//mutation to update the "done" status of a todo item