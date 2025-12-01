const resume = {
  name: 'Sayani Saha',
  title: 'Data Engineer',
  phone: '+91-6296791698',
  email: 'sayanisaha135@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sayanisaha',
  location: 'Bangalore, India',
  summary:
    'Data Engineer with 3+ years of experience designing and implementing scalable, cloud-based data pipelines and analytics solutions using Azure Databricks, Data Factory, and Data Lake. Proficient in data warehousing, ETL, data modeling, and big data processing with PySpark and SQL.',
  skills: [
    'Azure Databricks',
    'Azure Data Factory',
    'Azure Data Lake',
    'Python',
    'PySpark',
    'SQL',
    'Data Modeling',
  ],
  experience: [
    {
      company: 'Capgemini',
      role: 'Senior Analyst / Data Engineer',
      period: '04/2025 – Present',
      bullets: [
        'Designed and loaded warehouse tables using SCD Types, ensuring accurate historical tracking.',
        'Built and managed data lakes on ADLS, enabling scalable storage and seamless analytics integration.',
        'Improved data load performance by 30% through PySpark logic optimization.',
        'Developed Databricks notebooks to ingest data from multiple APIs using dynamic JSON tokens.',
        'Implemented upsert logic in PySpark for consistent handling of large datasets.',
        'Supervised ADF pipelines and Control-M jobs in dev/test environments.',
      ],
    },
    {
      company: 'Capgemini',
      role: 'Analyst / Data Engineer',
      period: '07/2022 – 03/2025',
      bullets: [
        'Migrated legacy systems (DB2, on-prem SQL, Oracle) to cloud platforms, achieving up to 70% cost savings.',
        'Led production deployments across enterprise environments with minimal downtime.',
        'Built and managed ADF pipelines to process and store 100+ TB of client data.',
        'Documented PII columns and mapped source-to-target tables for governance.',
      ],
    },
  ],
  education: [
    { inst: 'MCA — Jain', period: '04/2023 - 07/2025' },
    { inst: 'BCA — Guru Nanak Institute of Technology', period: '08/2019 - 06/2022' },
  ],
  certs: [
    'AZ-900 Microsoft Certified: Azure Fundamentals',
    'IBM Data Engineering Professional Certificate',
  ],
}

export default resume

