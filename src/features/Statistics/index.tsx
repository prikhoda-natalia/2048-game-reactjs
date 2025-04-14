import React from "react";
import type { NumberedBox } from "~/components/NumberedBoxes";
import NumberedBoxes from "~/components/NumberedBoxes";
import Page from "~/components/Page";
import { useAppSelector } from "~/features/App/hooks/useAppSelector";
import {
  selectFinishedGamesTotal,
  selectGivenUpGamesTotal,
  selectLostGamesTotal,
  selectWonGamesTotal
} from "./store/selectors";

const Statistics = (): React.JSX.Element => {
  const wonGamesTotal = useAppSelector(selectWonGamesTotal);
  const lostGamesTotal = useAppSelector(selectLostGamesTotal);
  const givenUpGamesTotal = useAppSelector(selectGivenUpGamesTotal);
  const gamesTotal = useAppSelector(selectFinishedGamesTotal);

  const stats: NumberedBox[] = [
    {
      title: "Games Played",
      value: gamesTotal
    },
    {
      title: "Games Won",
      value: wonGamesTotal
    },
    {
      title: "Games Lost",
      value: lostGamesTotal
    },
    {
      title: "Games Given Up",
      value: givenUpGamesTotal
    }
  ];

  return (
    <Page>
      <Page.Section hasPadding heading="Statistics">
        <NumberedBoxes items={stats} />
      </Page.Section>
    </Page>
  );
};

export default Statistics;
