// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
// import ContactList from '../../components/contactList/ContactList';
// import { fetchContacts } from '../../redux/contacts/operations';
import { selectWordsIsLoading, selectWordsError } from '../../redux/words/selectors';
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
// import ContactForm from '../../components/contactForm/ContactForm';
import SearchBox from '../../components/searchBox/SearchBox';
import css from './DictionaryPage.module.scss';

export default function DictionaryPage() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectWordsIsLoading);
  const error = useSelector(selectWordsError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <DocumentTitle>Dictionary</DocumentTitle>
      <div className={css.page}>
         <div className={css.container}>
         {/* <ContactForm /> */}
            <SearchBox/>
            {isLoading && <LoaderComponent />}
            {error && <ErrorMessage />}
            {/* <ContactList /> */}
         </div>    
      </div>   
    </>
  );
}
