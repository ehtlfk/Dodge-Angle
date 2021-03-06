import React from 'react';
import styled, { css } from 'styled-components';
import dotenv from 'dotenv';
import mainTheme from '../../lib/styles/mainTheme';

dotenv.config();
const URL = process.env.REACT_APP_API_URL;

const EnemyListBlock = styled.div`
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

const Label = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  background: ${mainTheme.mainBackground};
  color: ${mainTheme.mainEnemy};
  ${(props) =>
    props.white &&
    css`
      font-size: 1rem;
      color: ${mainTheme.mainLogoColor};
    `}
`;

const EnemyListItemBlock = styled.div`
  background: ${mainTheme.mainSummoner};
  border: ${2 / 16}rem solid ${mainTheme.mainBorder};
  margin: 0.5rem;
  height: ${100 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EnemyInfoBlock = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${mainTheme.mainFontColor};
`;

const EnemyInfo = styled.div`
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

const SummonerName = styled.div`
  display: block;
`;

const CounterOrExpetedChampionsBlock = styled.div`
  color: ${mainTheme.mainFontColor};
  display: flex;
  margin: 0.5rem;
`;

const CounterOrExpetedChampion = styled.div`
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
  justify-content: flex-end;
`;

const BanImg = styled.img`
  background: ${mainTheme.mainBackground};
  display: block;
  height: 3.5rem;
  width: 3.5rem;
  margin-left: 1rem;
  padding: 0.1rem;
  ${(props) =>
    props.ban &&
    css`
      padding: 0.25rem;
    `}
`;

const BanList = ({ enemies, phase }) => {
  return (
    <BanListBlock>
      {enemies &&
        enemies.map((enemy) => (
          <BanImg
            key={enemy.id}
            src={
              enemy.ban && phase !== 'ban'
                ? `${URL}/media/champion/${enemy.ban.image}`
                : require('../../img/noban.png')
            }
            ban={!enemy.ban || phase === 'ban'}
          />
        ))}
    </BanListBlock>
  );
};

/*
  AllyList??? ????????? ????????? => EnemyList??? ????????? ??????????????? ????????? ????????? ??????
*/
const EnemyListLabel = ({ phase }) => {
  return (
    <LabelBlock>
      <Label white>{phase === 'ban' ? '?????? ?????????' : '????????? ?????????'}</Label>
      <Label>?????? ???</Label>
    </LabelBlock>
  );
};

const EnemyListItem = ({ enemy, phase }) => {
  const counterChampions =
    phase === 'ban'
      ? enemy.expectedChampions !== null
        ? enemy.expectedChampions
        : null
      : enemy.counterChampions!== null
      ? enemy.counterChampions
      : null;
  return (
    <EnemyListItemBlock>
      <EnemyInfoBlock>
        <CounterOrExpetedChampionsBlock>
          {Boolean(counterChampions) && counterChampions.length &&
            counterChampions.map((champion) => (
              <CounterOrExpetedChampion key={champion.id}>
                <ChampionMiniImg
                  src={`${URL}/media/champion/${champion.image}`}
                />
                {/* {phase !== 'ban' &&
                  <ChampionWinRate>{parseInt(champion.winRate)}</ChampionWinRate>
                } */}
              </CounterOrExpetedChampion>
            ))}
        </CounterOrExpetedChampionsBlock>
      </EnemyInfoBlock>
      <EnemyInfoBlock>
        <EnemyInfo>
          {/* ?????? => AllyList??? ????????? ?????? ????????? */}

          <SummonerName>{enemy.id + 1}??? ?????????</SummonerName>

          {/* ????????? position or ????????? */}
          <ChampionImg
            src={
              enemy.pick
                ? `${URL}/media/champion/${enemy.pick.image}`
                : require('../../img/question.png')
            }
            alt="pick"
          />

          {/* ?????? ?????????, ?????? ?????? => ?????? ????????? ????????? ????????? */}
          {phase === 'ban' && (
            <ChampionImg
              src={
                enemy.ban
                  ? `${URL}/media/champion/${enemy.ban.image}`
                  : require('../../img/nochampion.png')
              }
              alt="ban"
            />
          )}
        </EnemyInfo>
      </EnemyInfoBlock>
    </EnemyListItemBlock>
  );
};

const EnemyList = ({ enemies, phase }) => {
  return (
    <EnemyListBlock>
      <BanList enemies={enemies} phase={phase} />
      <EnemyListLabel phase={phase} />
      {enemies?.map((enemy) => (
        <EnemyListItem key={enemy.id} enemy={enemy} phase={phase} />
      ))}
    </EnemyListBlock>
  );
};

export default EnemyList;
