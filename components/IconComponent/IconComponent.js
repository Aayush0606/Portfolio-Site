import { useRef } from "react";
import { useSpring, animated, config } from "react-spring";

export default function IconComponent({ item }) {
  const logoRef = useRef(null);
  const calc = (x, y) => [
    -(
      y -
      (logoRef.current?.getBoundingClientRect().top +
        logoRef.current?.getBoundingClientRect().bottom) /
        2
    ) / 20,
    (x -
      (logoRef.current?.getBoundingClientRect().left +
        logoRef.current?.getBoundingClientRect().right) /
        2) /
      20,
    1.2,
  ];
  const trans = (x, y, s) =>
    `perspective(25px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 500, friction: 15 },
  }));
  return (
    <div className="flex flex-col items-center justify-between">
      <animated.div
        className="rounded-full lg:hover:cursor-pointer "
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        <div>
          <img
            ref={logoRef}
            src={item.logoURL}
            alt={item.logoAlt}
            width={item.logoWidth}
            height={item.logoHeight}
          />
        </div>
      </animated.div>
      {item.logoName && (
        <div>
          <p className="tracking-widest">{item.logoName}</p>
        </div>
      )}
    </div>
  );
}
