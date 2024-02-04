import React from "react";
import { useTranslations } from "next-intl";

function Dashboard() {
  const t = useTranslations("Index");

  return <div>{t("welcome")}</div>;
}

export default Dashboard;
