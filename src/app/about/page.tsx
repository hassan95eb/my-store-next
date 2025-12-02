import ClientCompo from "@/components/ClientCompo";
import ServerComponent from "@/components/ServerComponent";
import React from "react";

export default function About() {
  return (
    <div>
      this is about page
      <ClientCompo>
        <ServerComponent />
      </ClientCompo>
    </div>
  );
}
