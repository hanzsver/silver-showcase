"use client";
import styled from "styled-components";

const StyledScrollWords = styled.div`
  :root {
    --font-size: clamp(2rem, 8vmin + 1rem, 4rem);
    --line: color-mix(in lch, canvasText 15%, transparent);
    --base: 0.4;
    --accent: hsl(8 100% 55%);
    --header-height: 100vh;
    --overlay: color-mix(in lch, canvas 70%, transparent);
    color-scheme: dark only;
  }

  :root[data-theme="light"] {
    --base: 0.3;
    --line: color-mix(in lch, canvasText 35%, transparent);
    --overlay: color-mix(in lch, canvas 70%, transparent);
    color-scheme: light only;
  }
`;

export default function ScrollWords() {
  return (
    <StyledScrollWords>
      <button aria-pressed="false" className="theme-toggle">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
        <span className="sr-only">Toggle Theme</span>
      </button>

      <header>
        <video
          autoPlay
          muted
          loop
          src="https://assets.codepen.io/605876/turntable-opt.mp4"
        ></video>
        <section>
          <h1>
            <span>CSS Pro</span>
            <span>Those Little Details</span>
          </h1>
          <a aria-hidden="true" href="#read">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </section>
      </header>

      <section className="reader" id="read">
        <div className="content">
          <div className="sr-only">
            With CSS, you can do way more than you think. One of the most fun
            CSS animation APIs ever. A magical way to create scroll-driven
            animations without the need to touch JavaScript. Animations run off
            the main thread. And you can choose to use View Timelines or Scroll
            Timelines.
          </div>
          <div data-split aria-hidden="true">
            The little details that make your sites feel great. Combine sticky
            positioning with some scroll animation. With CSS, you can do way
            more than you think.
          </div>
        </div>
      </section>

      <section>
        <h2>
          <span>You</span> got this.
        </h2>
        <svg
          className="sig"
          viewBox="0 0 271 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.3725 26.8984C58.6558 41.1564 141.659 43.1867 128.248 5.48254..."
            className="sign head"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={
              { "--path-speed": "2.1467741935483873" } as React.CSSProperties
            }
          />
          <path
            className="ear"
            d="M187.183 101.246C182.107 82.5407 155.739 77.9455 151.5 99"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={
              {
                "--path-speed": "0.08225806451612903",
                "--path-delay": "2.1467741935483873",
              } as React.CSSProperties
            }
          />
          <path
            className="ear"
            d="M117.998 100.704C117.998 91.1516 103.912 87.3662 96.5585 89.3717C84.7816 92.5836 80.6315 99.053 80.6315 110.505"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={
              {
                "--path-speed": "0.09193548387096774",
                "--path-delay": "2.229032258064516",
              } as React.CSSProperties
            }
          />
          <path
            className="eye"
            d="M170.025 108.347C168.627 105.551 162.781 110.631 165.494 114.577C168.207 118.523 173.936 114.091 171.643 109.965"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={
              {
                "--path-speed": "0.04516129032258064",
                "--path-delay": "2.3209677419354837",
              } as React.CSSProperties
            }
          />
          <path
            className="nose"
            d="M144.745 123.82C146.652 122.562 141.479 121.621 140.561 121.402C136.485 120.429 124.736 118.793 124.42 125.721"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={
              {
                "--path-speed": "0.1032258064516129",
                "--path-delay": "2.408064516129032",
              } as React.CSSProperties
            }
          />
        </svg>
      </section>
    </StyledScrollWords>
  );
}
