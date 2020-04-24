import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig.MY_SECRET);
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.API_ENDPOINT);

export default function Gssp(props) {
  return (
    <div>
      API_ENDPOINT: {publicRuntimeConfig.API_ENDPOINT}
      MY_SECRET: {serverRuntimeConfig.MY_SECRET}
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      MY_SECRET: serverRuntimeConfig.MY_SECRET,
      API_ENDPOINT: publicRuntimeConfig.API_ENDPOINT,
    },
  };
};
