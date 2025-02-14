"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ImgWrapper = styled.div`
  position: absolute;
  bottom: calc(var(--grid-gap) / 2 * -1);
  left: 0;
  right: 0;
  width: calc(100% + (var(--grid-gap) / 2));
  height: calc(100% + var(--grid-gap));
  opacity: 0;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.visible {
    display: block;
    opacity: 1;
  }
`;

const StyledCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 326px;
  padding-left: 10px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: calc(var(--grid-gap) / -2);
    background-color: var(--color-black);
  }
  &::before {
    width: 100%;
    height: 2px;
    top: calc(var(--grid-gap) / -2);
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    top: 0;
    width: 2px;
    height: 100%;
  }
  &:nth-child(-n + 3)::before {
    display: none;
  }
`;

const StyledCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Card({ title, name }: { title: string; name: string }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const imgSrc = `/images/${name}.gif`;

  const handleClick = () => {
    router.push(`${name}`);
  };
  return (
    <StyledCard
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={handleClick}
    >
      <h2>{title}</h2>
      <StyledCardBottom>
        <div>
          <div>chip</div>
        </div>
        {/* <span>Details</span> */}
      </StyledCardBottom>
      <ImgWrapper className={isVisible ? "visible" : ""}>
        <Image src={imgSrc} alt="Preview GIF" width={648} height={354} />
      </ImgWrapper>
    </StyledCard>
  );
}
