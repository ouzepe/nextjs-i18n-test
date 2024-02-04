import { useTranslations } from "next-intl";

export default function Home() {
  const  t  = useTranslations('Index');
  return (
    <main>
      <br />
      <h1>{t("hello")}</h1>
    </main>
  );
}
