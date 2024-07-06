import React, { createContext, ReactNode, useState } from "react";

const QuestionsContext = createContext([[], (): void => {}]);

const initialState: any = [];

interface QuestionsProviderProps {
  children: ReactNode;
}

const QuestionsProvider: React.FC<QuestionsProviderProps> = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <QuestionsContext.Provider value={[state, setState]}>
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsProvider };
