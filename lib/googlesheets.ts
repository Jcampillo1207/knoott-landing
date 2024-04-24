"use server";

import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

type form = {
  edad: string;
  gender: string;
  device: string;
  platform: string;
  like: string | null;
  dislike: string | null;
  comp: string;
  competence: string | null;
  competenceLike: string | null;
  competenceDislike: string | null;
  characteristics: string | null;
  prefer: string;
};

export const postSheetsData = async (form: form) => {
  //prepare authentication

  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
    },
    projectId: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({
    auth: auth,
    version: "v4",
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
    range: "Hoja",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          form.edad,
          form.gender,
          form.device,
          form.platform,
          form.like,
          form.dislike,
          form.comp,
          form.competence,
          form.competenceLike,
          form.competenceDislike,
          form.characteristics,
          form.prefer,
        ],
      ],
    },
  });

  return response.data;
};
