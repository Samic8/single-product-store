import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks';

const ADD_USER = gql`
  mutation addUser($email: String!, $name: String!){
    addUser(
      email: $email
      name: $name
    ) {id}
  }
`;


export default function() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitForm, { loading }] = useMutation(ADD_USER, {
    variables: { email, name },
    update: (proxy, mutationResult) => {console.log(mutationResult)}
  });
  return (
    <>
      <hr/>
      <form style={{color: "black"}}>
        <input
          type="text"
          value={name}
          onChange={({target}) => setName(target.value)}
          placeholder="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          placeholder="Your email"
        />
        <button type="button" onClick={submitForm}>Submitt</button>
      </form>
    </>
  )
}