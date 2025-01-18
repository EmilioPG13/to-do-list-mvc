const checkResponse = async (res) => {
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return res.json();
  } else {
    const text = await res.text();
    throw new Error(text);
  }
};

export const createTodo = async (todo) => {
  try {
    const res = await fetch('api/todo/create', {
      method: 'POST',
      body: todo,
    });
    return await checkResponse(res);
  } catch (error) {
    return { error };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch('api/todos');
    return await checkResponse(res);
  } catch (error) {
    return { error };
  }
};

export const removeTodo = async (id) => {
  try {
    const res = await fetch(`/api/todo/${id}`, {
      method: 'DELETE',
    });
    return await checkResponse(res);
  } catch (error) {
    return { error };
  }
};