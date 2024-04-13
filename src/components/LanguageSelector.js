import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchParametersContext } from "../store/SearchParametersContext";

function LanguageSelector() {

  // TODO: Change these properties depending on how the Front-end connects to the HTTPS Service
  const atlasProperties = {
    en: {
      database: "whatscooking",
      collection: "restaurants",
      synonymCollection: "menu_synonyms",
      index: "TODO"
    },
    jp: {
      database: "whatscooking",
      collection: "restaurants_jp",
      synonymCollection: "menu_synonyms_jp",
      index: "TODO"
    },
    id: {
      database: "whatscooking",
      collection: "restaurants_id",
      synonymCollection: "menu_synonyms_id",
      index: "TODO"
    },
    th: {
      database: "whatscooking",
      collection: "restaurants_th",
      synonymCollection: "menu_synonyms_th",
      index: "TODO"
    }
  };

  const { i18n } = useTranslation();

  const {
    setAtlasLanguageProperties,
  } = useContext(SearchParametersContext);

  const changeLanguage = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setAtlasLanguageProperties(atlasProperties[newLanguage] || atlasProperties['en']);
  };

  return (
    <div>
      <label htmlFor="language-select">Language:</label>
      <select id="language-select" onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="jp">Japanese</option>
        <option value="th">Thai</option>
        <option value="id">Indonesian</option>
      </select>
    </div>
  );

}

export default LanguageSelector;
