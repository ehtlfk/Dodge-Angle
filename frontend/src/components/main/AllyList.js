import React from 'react';
import styled, { css } from 'styled-components';
import dotenv from 'dotenv';
import mainTheme from '../../lib/styles/mainTheme';

dotenv.config();
const URL = process.env.REACT_APP_API_URL;

const AllyListBlock = styled.div`
  height: 100%;
  background: ${mainTheme.mainBackground};
  border: ${2 / 16}rem solid ${mainTheme.mainBorder};
`;

const LabelBlock = styled.div`
  height: 2rem;
  margin: 1rem;
  background: ${mainTheme.mainBackground};
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const FlexBlock = styled.div`
  dispaly: flex
  justify-content: flex-end;
  text-align: center;
`

const Label = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  background: ${mainTheme.mainBackground};
  color: ${mainTheme.mainAlly};
  ${(props) =>
    props.white &&
    css`
      font-size: 1rem;
      color: ${mainTheme.mainLogoColor};
    `}
    ${(props) =>
      props.small &&
      css`
        font-size: 0.75rem;
        color: ${mainTheme.mainBorder};
      `}
`;

const AllyListItemBlock = styled.div`
  background: ${mainTheme.mainSummoner};
  border: ${2 / 16}rem solid ${mainTheme.mainBorder};
  margin: 0.5rem;
  height: ${100 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.me &&
    css`
    border: ${2/16}rem solid ${mainTheme.mainAlly};
    `}
`;

const AllyInfoBlock = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${mainTheme.mainFontColor};
`;

const AllyInfo = styled.div`
  margin-left: 0.25rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${mainTheme.mainFontColor};
  display: flex;
  align-items: center;
`;

const ChampionImg = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  display: block;
`;

const SummonerBlock = styled.div``;

const SummonerName = styled.div``;

const SummonerBadgeBlock = styled.div`
  margin-top: 0.25rem;
`;

const SummonerBadge = styled.span`
  background: ${mainTheme.mainBackground};
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
  padding: 0 0.15rem;
  border-radius: 10%;

  ${(props) =>
    props.win &&
    css`
      color: ${mainTheme.mainAlly};
    `}
  ${(props) =>
    props.loss &&
    css`
      color: ${mainTheme.mainEnemy};
    `}
`;

const MostChampionsBlock = styled.div`
  color: ${mainTheme.mainFontColor};
  display: flex;
  margin: 0.5rem;
`;

const MostChampion = styled.div`
  color: ${mainTheme.mainFontColor};
  margin: 0.25rem;
  align-items: center;
`;

const ChampionMiniImg = styled.img`
  height: 2rem;
  width: 2rem;
  display: block;
  border-radius: 100%;
`;

const ChampionWinRate = styled.div`
  font-size: 1.25rem;
  text-align: center;
`;

const BanListBlock = styled.div`
  margin: 1rem;
  width: calc(100%-2rem);
  background: ${mainTheme.mainBackground};
  display: flex;
  justify-content: flex-start;
`;

const BanImg = styled.img`
  background: ${mainTheme.mainBackground};
  display: block;
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 1rem;
  padding: 0.1rem;
  ${(props) =>
    props.ban &&
    css`
      padding: 0.25rem;
    `}
`;

const BanList = ({ teamMates, phase }) => {
  return (
    <BanListBlock>
      {teamMates &&
        teamMates.map((teamMate) => (
          <BanImg
            key={teamMate.id}
            src={
              teamMate.ban && phase !== 'ban'
                ? `${URL}/media/champion/${teamMate.ban.image}`
                : require('../../img/noban.png')
            }
            ban={!teamMate.ban || phase === 'ban'}
          />
        ))}
    </BanListBlock>
  );
};

const AllyListLabel = () => {
  return (
    <LabelBlock>
      <Label>?????? ???</Label>
      <FlexBlock>
        <Label white>????????? ?????????</Label>
        <Label small> (??????%)</Label>
      </FlexBlock>
      
    </LabelBlock>
  );
};

const AllyListItem = ({ teamMate, phase }) => {
  return (
    <AllyListItemBlock me={teamMate.me}>
      <AllyInfoBlock>
        <AllyInfo>
          {/* ?????? ?????????, ?????? ?????? => ?????? ????????? ????????? ????????? */}
          {phase === 'ban' && (
            <ChampionImg
              src={
                teamMate.ban
                  ? `${URL}/media/champion/${teamMate.ban.image}`
                  : require('../../img/nochampion.png')
              }
              alt="ban"
            />
          )}
          {/* ????????? position or ????????? */}
          <ChampionImg
            big={phase !== 'ban'}
            src={
              teamMate.pick
                ? `${URL}/media/champion/${teamMate.pick.image}`
                : require(`../../img/positions/${teamMate.pos}.png`)
            }
            alt="pick"
          />
          <SummonerBlock>
            <SummonerName>{teamMate.name}</SummonerName>
            <SummonerBadgeBlock>
              {teamMate.badges &&
                teamMate.badges.map((badge) => (
                  badge.length || typeof badge === 'number'
                    ? <SummonerBadge
                        key={teamMate.badges.indexOf(badge)}
                        win={
                          badge.length >= 3 &&
                          badge.slice(badge.length - 3, badge.length) === '?????????'
                        }
                        loss={
                          badge.length >= 3 &&
                          badge.slice(badge.length - 3, badge.length) === '?????????'
                        }
                      >
                        {badge}
                      </SummonerBadge>
                    : <></>
                ))
              }
            </SummonerBadgeBlock>
          </SummonerBlock>
        </AllyInfo>
      </AllyInfoBlock>
      <AllyInfoBlock>
        <MostChampionsBlock>
          {Boolean(teamMate?.mostChampions) && teamMate.mostChampions.length &&
            teamMate.mostChampions.map((champion) => (
              <MostChampion key={teamMate.mostChampions.indexOf(champion)}>
                <ChampionMiniImg
                  src={`${URL}/media/champion/${champion.image}`}
                />
                <ChampionWinRate>{parseInt(champion.win_rate)}</ChampionWinRate>
              </MostChampion>
            ))}
        </MostChampionsBlock>
      </AllyInfoBlock>
    </AllyListItemBlock>
  );
};

const AllyList = ({ teamMates, phase }) => {
  return (
    <AllyListBlock>
      <BanList teamMates={teamMates} phase={phase} />
      <AllyListLabel />
      {teamMates?.map((teamMate) => (
        <AllyListItem key={teamMate.id} teamMate={teamMate} phase={phase} />
      ))}
    </AllyListBlock>
  );
};

export default AllyList;
