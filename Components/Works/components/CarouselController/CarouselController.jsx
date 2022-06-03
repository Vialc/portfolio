import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import "./CarouselController.scss";

export default function CarouselController({ takeButtonId, buttonList }) {
  const [selected, setSelected] = useState(buttonList[0]);

  useEffect(() => {
    handleCarouselItemId1(selected.id);
  }, [selected]);

  function handleCarouselItemId1(selectedItem) {
    takeButtonId(selectedItem);
  }

  return (
    <>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="controller"
      >
        {buttonList.map((uniqueButton) => (
          <RadioGroup.Option
            key={uniqueButton.id}
            value={uniqueButton}
            className={({ active, checked }) =>
              `${
                active
                  ? "controller__button controller__button--active"
                  : "controller__button"
              }
            ${
              checked
                ? "controller__button controller__button--active"
                : "controller__button"
            }`
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label
                  as="p"
                  className={`${
                    checked
                      ? "controller__button controller__button--active"
                      : "controller__button"
                  }`}
                >
                  {uniqueButton.text}
                </RadioGroup.Label>
              </>
            )}
          </RadioGroup.Option>
        ))}
        <div className="controller__line"></div>
      </RadioGroup>
    </>
  );
}
