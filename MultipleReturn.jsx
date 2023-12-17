// multiple returns

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  return <h2>Multiple Return...</h2>;
};

export default MultipleReturn;
