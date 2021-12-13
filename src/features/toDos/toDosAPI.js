const initialToDos = [
  { id: '1', isCompleted: false, text: 'Workpath onboarding' },
  { id: '2', isCompleted: false, text: 'Finish to-do app' },
];

export function fetchToDos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: initialToDos }), 1000);
  });
}
