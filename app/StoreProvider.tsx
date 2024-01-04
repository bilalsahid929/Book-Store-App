"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { AppStore, store } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistor} loading={<h2>Loading...</h2>}>
        {children}
      </PersistGate>
    </Provider>
  );
}
