"use client";
import styled from "styled-components";
import Card from "@/components/Card";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gap);
  margin-top: calc(var(--grid-gap) / 2);
`;

const mockData = [
  { id: 1, title: "Scroll Words", name: "scroll-words" },
  { id: 2, title: "No data", name: "" },
  { id: 3, title: "No data", name: "" },
  { id: 4, title: "No data", name: "" },
  { id: 5, title: "No data", name: "" },
  { id: 6, title: "No data", name: "" },
  { id: 7, title: "No data", name: "" },
  { id: 8, title: "No data", name: "" },
  { id: 9, title: "No data", name: "" },
];

export default function Home() {
  return (
    <>
      <CardGrid>
        {mockData.map((item) => (
          <Card key={item.id} title={item.title} name={item.name} />
        ))}
      </CardGrid>
    </>
  );
}
