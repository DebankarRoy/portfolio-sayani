import React from 'react'
import Lottie from 'lottie-react'
import azureDataLakeIcon from '../assets/data-lake.svg'
import azureDatabricksIcon from '../assets/azure-databricks.svg'
import dataLakeIcon from '../assets/data-lake.svg'
import pysparkIcon from '../assets/pyspark.svg'
import pythonIcon from '../assets/python.svg'
import sqlIcon from '../assets/sql.svg'
import dataModelingIcon from '../assets/data-modeling.svg'

const localSkillLotties =
  typeof import.meta !== 'undefined' && typeof import.meta.globEager === 'function'
    ? import.meta.globEager('../animations/skills/*.json')
    : {}

const lottieMap = {}
for (const path in localSkillLotties) {
  const match = path.match(/([^/]+)\.json$/)
  if (match) lottieMap[match[1].toLowerCase()] = localSkillLotties[path]
}

const skillAssets = {
  'Azure Databricks': { icon: azureDatabricksIcon, lottieKey: 'databricks' },
  'Azure Data Factory': { icon: azureDataLakeIcon, lottieKey: 'azure' },
  'Azure Data Lake': { icon: dataLakeIcon, lottieKey: 'azure' },
  Python: { icon: pythonIcon, lottieKey: 'python' },
  PySpark: { icon: pysparkIcon, lottieKey: 'spark' },
  SQL: { icon: sqlIcon, lottieKey: 'sql' },
  'Data Modeling': { icon: dataModelingIcon, lottieKey: 'dataModeling' },
}

const defaultSVG = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#94A3B8" />
  </svg>
)

const Skills = ({ items }) => {
  return (
    <section id="skills" className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {items.map(skill => {
          const asset = skillAssets[skill] || { icon: null, lottieKey: null }
          const hasLottieKey = asset.lottieKey && lottieMap[asset.lottieKey]
          const lottieData = hasLottieKey ? lottieMap[asset.lottieKey] : null
          return (
            <div key={skill} className="flex items-center gap-3 px-3 py-1.5 bg-slate-700/40 rounded-full text-sm backdrop-blur-sm shadow-sm">
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-white/6">
                {lottieData ? (
                  <div className="w-5 h-5">
                    <Lottie animationData={lottieData} loop />
                  </div>
                ) : (
                  <div className="w-5 h-5">
                    {asset.icon ? <img src={asset.icon} alt={`${skill} icon`} className="w-5 h-5 object-contain" loading="lazy" /> : defaultSVG()}
                  </div>
                )}
              </div>
              <div className="text-sm">{skill}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

