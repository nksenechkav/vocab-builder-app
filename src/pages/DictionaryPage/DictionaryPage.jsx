// src/pages/DictionaryPage/DictionaryPage.jsx

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
// import { fetchContacts } from '../../redux/contacts/operations';
import { selectWordsIsLoading, selectWordsError } from '../../redux/words/selectors';
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
// import ContactForm from '../../components/contactForm/ContactForm';
import css from './DictionaryPage.module.scss';
import { Dashboard } from '../../components/dashboard/Dashboard';
import WordsTable from '../../components/wordsTable/WordsTable';

export default function DictionaryPage() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectWordsIsLoading);
  const error = useSelector(selectWordsError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const wordsData = [
    { word: "a little bit", translation: "трохи, трішки", category: "Phrasal verb", progress: 50 },
    { word: "Break in", translation: "Вмішуватися, встрявати", category: "Phrasal verb", progress: 100 },
    { word: "Care", translation: "Турбота, догляд", category: "Verb", progress: 100 },
    { word: "During", translation: "Протягом, під час", category: "Preposition", progress: 50 },
    { word: "Until", translation: "Поки, недо", category: "Preposition", progress: 100 },
    { word: "Phone", translation: "Телефон", category: "Noun", progress: 50 },
    { word: "Shoes", translation: "Взуття", category: "Noun", progress: 50 },
  ];
  

  return (
    <>
      <DocumentTitle>Dictionary</DocumentTitle>
      <div className={css.page}>
         <div className={css['container-dictionary']}>
         {/* <ContactForm /> */}
            <Dashboard/>
            {isLoading && <LoaderComponent />}
            {error && <ErrorMessage />}
            <WordsTable  words={wordsData} />
         </div>    
      </div>   
    </>
  );
}
