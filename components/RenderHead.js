import { memo } from "react";
import Head from "next/head";

function RenderHead({ pageTitle = "" }) {
  return (
    <Head>
      <title>{`${pageTitle} Page`}</title>
    </Head>
  );
}

export default memo(RenderHead);
