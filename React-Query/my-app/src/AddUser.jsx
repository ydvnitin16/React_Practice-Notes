// 🔰 Mutation

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function AddUser() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newUser) => axios.post('http://localhost:5000/users/d856', newUser),
    onSuccess: () => {
      // Invalidate and refetch when data is changed
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  const handleAdd = () => {
    mutation.mutate({ name: 'Nitin', email: 'nitin@gmail.com' })
  }
  const handleUpdate = () => {
    mutation.mutate({ name: 'Tamanna', email: 'ydvTam@gmail.com' })
  }

  return <button onClick={handleUpdate}>Add User</button>
}

export default AddUser;