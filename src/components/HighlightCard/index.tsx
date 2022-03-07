import React from "react";
import { View } from "react-native";

import * as S from "./styles";

interface HighlightCardProps {
  type: "up" | "down" | "total";
  amount: string;
  lastTransaction: string;
}

export function HighlightCard({
  type,
  amount,
  lastTransaction,
}: HighlightCardProps) {
  const title = {
    up: "Entrada",
    down: "Saída",
    total: "Total",
  };

  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign",
  };

  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title[type]}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>
      <S.Amount type={type}>{amount}</S.Amount>
      <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
    </S.Container>
  );
}
