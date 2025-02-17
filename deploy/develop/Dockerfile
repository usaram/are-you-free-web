FROM public.ecr.aws/docker/library/node:23-alpine3.20 AS base

WORKDIR /web

RUN yarn install

EXPOSE 5173

ENV NEXT_TELEMETRY_DISABLED=1
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
