'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type ContextProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const DocumentationContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false,
});

export default function DocumentationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <DocumentationContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </DocumentationContext.Provider>
  );
}

export const useDocumentationProvider = () => useContext(DocumentationContext);
