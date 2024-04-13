import React, { useContext } from 'react';
import { SearchParametersContext } from '../store/SearchParametersContext';

function AtlasLanguageProperties() {
    const {
        atlasLanguageProperties,
      } = useContext(SearchParametersContext);

      const entries = Object.entries(atlasLanguageProperties);
  
      return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h3 className="text-lg font-semibold text-center mb-4">Language Specific Properties</h3>
                <table className="min-w-full table-auto shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                    <th className="px-4 py-2">Property</th>
                    <th className="px-4 py-2">Value</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {entries.map(([key, value], index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                        <td className="border px-4 py-2 text-gray-800">{key}</td>
                        <td className="border px-4 py-2 text-gray-800">{value}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
      );
}

export default AtlasLanguageProperties;
